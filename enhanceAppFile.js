import * as Fathom from 'fathom-client';

export default ({ router }) => {
  if (process.env.NODE_ENV === 'production' && FATHOM_ID && typeof window !== 'undefined') {
    const domains = FATHOM_DOMAINS ? FATHOM_DOMAINS.split(',') : undefined;
    Fathom.load(FATHOM_ID, {
      url: FATHOM_URL,
      includedDomains: domains,
    });

    router.afterEach(function(to) {
      Fathom.trackPageview();
    });
  }
}
