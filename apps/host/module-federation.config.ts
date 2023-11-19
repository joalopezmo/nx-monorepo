import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',
  remotes: ['dashboard', 'example-remote'],
};

export default config;
