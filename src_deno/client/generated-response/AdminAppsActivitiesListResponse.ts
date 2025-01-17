// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
export type AdminAppsActivitiesListResponse = SlackAPIResponse & {
  activities?: Activity[];
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface Activity {
  app_id?: string;
  component_id?: string;
  component_type?: string;
  created?: number;
  enterprise_id?: string;
  event_type?: string;
  level?: string;
  payload?: Payload;
  source?: string;
  team_id?: string;
  trace_id?: string;
}

export interface Payload {
  actor?: string;
  billing_reason?: string[];
  bot_user_id?: string;
  channel_id?: string;
  current_step?: number;
  error?: string;
  exec_outcome?: string;
  function_execution_id?: string;
  function_id?: string;
  function_name?: string;
  function_type?: string;
  inputs?: Inputs;
  is_billing_excluded?: boolean;
  log?: string;
  total_steps?: number;
  trigger?: Trigger;
  type?: string;
  workflow_name?: string;
}

export interface Inputs {}

export interface Trigger {
  config?: Config;
  id?: string;
  trip_information?: TripInformation;
  type?: string;
}

export interface Config {
  description?: string;
  event_type?: string;
  name?: string;
  schema?: Inputs;
}

export interface TripInformation {
  channel_id?: string;
  message_ts?: string;
  reaction?: string;
  user_id?: string;
}

export interface ResponseMetadata {
  next_cursor?: string;
}
