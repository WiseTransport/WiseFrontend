import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

dotenv.config()

const config: CodegenConfig = {
  schema: process.env.VITE_GRAPHQL_URL || 'http://localhost:8080/otp/routers/default/index/graphql',
  documents: ['./src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/features/WiseMap/api/graphql/': {
      preset: 'client',
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config
