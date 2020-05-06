import * as Fathom from 'fathom-client';

export default ({ router }) => {
  if (process.env.NODE_ENV === 'production' && FATHOM_ID && typeof window !== 'undefined') {
    Fathom.load(FATHOM_URL);
    Fathom.setSiteId(FATHOM_ID);

    router.afterEach(function(to) {
      Fathom.trackPageview();
    });
  }
}
