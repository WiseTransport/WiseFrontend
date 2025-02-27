import type { CodegenConfig } from "@graphql-codegen/cli"

import { GRAPHQL_URL } from "./src/config/graphql.ts"

const config: CodegenConfig = {
  schema: GRAPHQL_URL,
  documents: ["./src/api/queries/**/*.ts"],
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
}

export default config
