## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- [NextUI](https://heroui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## How to Use

### !!! Dependant on OTPProvider

You will first need to launch the OTPProvider. Follow README.md in the corresponding folder.

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Set OTP url

If you're hosting OTP locally on port `8080`, then you can skip this step.\
Set `VITE_GRAPHQL_URL` in the `.env` file.

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [GPL v3](https://www.gnu.org/licenses/gpl-3.0.txt).
