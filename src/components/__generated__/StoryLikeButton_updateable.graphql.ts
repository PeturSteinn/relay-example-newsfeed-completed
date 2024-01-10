/**
 * @generated SignedSource<<f89a64420ce7ce06a0142e71112034be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { UpdatableFragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StoryLikeButton_updateable$data = {
  doesViewerLike: boolean | null;
  likeCount: number | null;
  readonly " $fragmentType": "StoryLikeButton_updateable";
};
export type StoryLikeButton_updateable$key = {
  readonly " $data"?: StoryLikeButton_updateable$data;
  readonly $updatableFragmentSpreads: FragmentRefs<"StoryLikeButton_updateable">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoryLikeButton_updateable",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "likeCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doesViewerLike",
      "storageKey": null
    }
  ],
  "type": "Story",
  "abstractKey": null
};

(node as any).hash = "b0d2d074a29f55255086216300021a4d";

export default node;
