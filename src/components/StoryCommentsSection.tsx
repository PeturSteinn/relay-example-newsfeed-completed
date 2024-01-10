import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, usePaginationFragment } from "react-relay";
import type { StoryCommentsSectionFragment$key } from "./__generated__/StoryCommentsSectionFragment.graphql";
import Comment from "./Comment";
import LoadMoreCommentsButton from "./LoadMoreCommentsButton";
import SmallSpinner from "./SmallSpinner";
import StoryCommentsComposer from "./StoryCommentsComposer";

const { useState, useTransition } = React;

export type Props = {
  story: StoryCommentsSectionFragment$key;
};

const StoryCommentsSectionFragment = graphql`
  fragment StoryCommentsSectionFragment on Story
  @refetchable(queryName: "StoryCommentsSectionPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  ) {
    comments(after: $cursor, first: $count)
      @connection(key: "StoryCommentsSectionFragment_comments") {
      pageInfo {
        startCursor
        hasNextPage
      }
      edges {
        node {
          id
          ...CommentFragment
        }
      }
    }
    ...StoryCommentsComposerFragment
  }
`;

export default function StoryCommentsSection({ story }: Props) {
  // const data = useFragment(StoryCommentsSectionFragment, story);
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(
    StoryCommentsSectionFragment,
    story
  );
  const onLoadMore = () => {
    // see https://github.com/facebook/relay/issues/4531#issuecomment-1867831999 for an alternative solution with isLoadingNext...
    return startTransition(() => {
      loadNext(3);
    });
  };
  return (
    <div>
      <StoryCommentsComposer story={data} />

      {data.comments.edges.map((edge) => (
        <Comment key={edge.node.id} comment={edge.node} />
      ))}
      {data.comments.pageInfo.hasNextPage && (
        <LoadMoreCommentsButton onClick={onLoadMore} disabled={isPending} />
      )}
      {isPending && <SmallSpinner />}
    </div>
  );
}
