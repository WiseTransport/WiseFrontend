/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query getStopsByBbox(\n    $maxLat: Float!\n    $maxLon: Float!\n    $minLat: Float!\n    $minLon: Float!\n  ) {\n    stopsByBbox(maxLat: $maxLat, maxLon: $maxLon, minLat: $minLat, minLon: $minLon) {\n      gtfsId\n      name\n      lat\n      lon\n      routes {\n        gtfsId\n        shortName\n      }\n    }\n  }\n": typeof types.GetStopsByBboxDocument,
    "\n  query getStoptimes($gtfsId: String!, $startTime: Long!) {\n    stop(id: $gtfsId) {\n      name\n      stoptimesForPatterns(startTime: $startTime) {\n        pattern {\n          code\n          route {\n            mode\n            shortName\n            color\n            textColor\n          }\n        }\n        stoptimes {\n          scheduledArrival\n          trip {\n            gtfsId\n            tripHeadsign\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetStoptimesDocument,
    "\n  query getTripDetails($gtfsId: String!) {\n    trip(id: $gtfsId) {\n      pattern {\n        code\n        patternGeometry {\n          points\n        }\n      }\n      stops {\n        name\n        lon\n        lat\n      }\n    }\n  }\n": typeof types.GetTripDetailsDocument,
    "\n  query getVehiclePosition($code: String!) {\n    pattern(id: $code) {\n      vehiclePositions {\n        stopRelationship {\n          status\n        }\n        trip {\n          gtfsId\n        }\n        heading\n        lat\n        lon\n        speed\n      }\n    }\n  }\n": typeof types.GetVehiclePositionDocument,
};
const documents: Documents = {
    "\n  query getStopsByBbox(\n    $maxLat: Float!\n    $maxLon: Float!\n    $minLat: Float!\n    $minLon: Float!\n  ) {\n    stopsByBbox(maxLat: $maxLat, maxLon: $maxLon, minLat: $minLat, minLon: $minLon) {\n      gtfsId\n      name\n      lat\n      lon\n      routes {\n        gtfsId\n        shortName\n      }\n    }\n  }\n": types.GetStopsByBboxDocument,
    "\n  query getStoptimes($gtfsId: String!, $startTime: Long!) {\n    stop(id: $gtfsId) {\n      name\n      stoptimesForPatterns(startTime: $startTime) {\n        pattern {\n          code\n          route {\n            mode\n            shortName\n            color\n            textColor\n          }\n        }\n        stoptimes {\n          scheduledArrival\n          trip {\n            gtfsId\n            tripHeadsign\n          }\n        }\n      }\n    }\n  }\n": types.GetStoptimesDocument,
    "\n  query getTripDetails($gtfsId: String!) {\n    trip(id: $gtfsId) {\n      pattern {\n        code\n        patternGeometry {\n          points\n        }\n      }\n      stops {\n        name\n        lon\n        lat\n      }\n    }\n  }\n": types.GetTripDetailsDocument,
    "\n  query getVehiclePosition($code: String!) {\n    pattern(id: $code) {\n      vehiclePositions {\n        stopRelationship {\n          status\n        }\n        trip {\n          gtfsId\n        }\n        heading\n        lat\n        lon\n        speed\n      }\n    }\n  }\n": types.GetVehiclePositionDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getStopsByBbox(\n    $maxLat: Float!\n    $maxLon: Float!\n    $minLat: Float!\n    $minLon: Float!\n  ) {\n    stopsByBbox(maxLat: $maxLat, maxLon: $maxLon, minLat: $minLat, minLon: $minLon) {\n      gtfsId\n      name\n      lat\n      lon\n      routes {\n        gtfsId\n        shortName\n      }\n    }\n  }\n"): (typeof documents)["\n  query getStopsByBbox(\n    $maxLat: Float!\n    $maxLon: Float!\n    $minLat: Float!\n    $minLon: Float!\n  ) {\n    stopsByBbox(maxLat: $maxLat, maxLon: $maxLon, minLat: $minLat, minLon: $minLon) {\n      gtfsId\n      name\n      lat\n      lon\n      routes {\n        gtfsId\n        shortName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getStoptimes($gtfsId: String!, $startTime: Long!) {\n    stop(id: $gtfsId) {\n      name\n      stoptimesForPatterns(startTime: $startTime) {\n        pattern {\n          code\n          route {\n            mode\n            shortName\n            color\n            textColor\n          }\n        }\n        stoptimes {\n          scheduledArrival\n          trip {\n            gtfsId\n            tripHeadsign\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getStoptimes($gtfsId: String!, $startTime: Long!) {\n    stop(id: $gtfsId) {\n      name\n      stoptimesForPatterns(startTime: $startTime) {\n        pattern {\n          code\n          route {\n            mode\n            shortName\n            color\n            textColor\n          }\n        }\n        stoptimes {\n          scheduledArrival\n          trip {\n            gtfsId\n            tripHeadsign\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTripDetails($gtfsId: String!) {\n    trip(id: $gtfsId) {\n      pattern {\n        code\n        patternGeometry {\n          points\n        }\n      }\n      stops {\n        name\n        lon\n        lat\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTripDetails($gtfsId: String!) {\n    trip(id: $gtfsId) {\n      pattern {\n        code\n        patternGeometry {\n          points\n        }\n      }\n      stops {\n        name\n        lon\n        lat\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getVehiclePosition($code: String!) {\n    pattern(id: $code) {\n      vehiclePositions {\n        stopRelationship {\n          status\n        }\n        trip {\n          gtfsId\n        }\n        heading\n        lat\n        lon\n        speed\n      }\n    }\n  }\n"): (typeof documents)["\n  query getVehiclePosition($code: String!) {\n    pattern(id: $code) {\n      vehiclePositions {\n        stopRelationship {\n          status\n        }\n        trip {\n          gtfsId\n        }\n        heading\n        lat\n        lon\n        speed\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;