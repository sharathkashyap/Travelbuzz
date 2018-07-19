import { TtpModule } from './ttp.module';

describe('TtpModule', () => {
  let ttpModule: TtpModule;

  beforeEach(() => {
    ttpModule = new TtpModule();
  });

  it('should create an instance', () => {
    expect(ttpModule).toBeTruthy();
  });
});
