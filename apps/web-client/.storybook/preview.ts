import { Preview, moduleMetadata } from '@storybook/angular';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { ConfigService } from '../src/app/services/config.service';

initialize();

const preview: Preview = {
  loaders: [mswLoader],
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: ConfigService,
          useClass: class StorybookConfigService extends ConfigService {
            override getBackendBaseUrl() {
              // Needs to be in sync with the port storybook is running on
              return 'http://localhost:5200';
            }
          },
        },
      ],
    }),
  ],
};

export default preview;
