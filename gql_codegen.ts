import type { CodegenConfig } from "@graphql-codegen/cli"

import { GRAPHQL_URL } from "./src/config/graphql.ts"

const config: CodegenConfig = {
  schema: GRAPHQL_URL,
  documents: ["./src/api/queries/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  },
}

export default config
