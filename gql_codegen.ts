import type { CodegenConfig } from "@graphql-codegen/cli"

import { GRAPHQL_URL } from "./src/features/WiseMap/api/shared"

const config: CodegenConfig = {
  schema: GRAPHQL_URL,
  documents: ["./src/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./src/features/WiseMap/api/graphql/": {
      preset: "client",
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config
