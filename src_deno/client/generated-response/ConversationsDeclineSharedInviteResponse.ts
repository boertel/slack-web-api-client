///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts"
export type ConversationsDeclineSharedInviteResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};