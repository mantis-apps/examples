export const environment = {
  get backendBaseUrl() {
    throw new Error(
      'environment.ts should be substituted with the environment.<target>.ts file during the build process. Ensure the right target is set.'
    );
  },
};
