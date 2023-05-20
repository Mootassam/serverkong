export default (app) => {
  app.post(
    `/tenant/:tenantId/formule`,
    require('./formuleCreate').default,
  );
  app.put(
    `/tenant/:tenantId/formule/:id`,
    require('./formuleUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/formule/import`,
    require('./formuleImport').default,
  );
  app.delete(
    `/tenant/:tenantId/formule`,
    require('./formuleDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/formule/autocomplete`,
    require('./formuleAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/formule`,
    require('./formuleList').default,
  );
  app.get(
    `/tenant/:tenantId/formule/:id`,
    require('./formuleFind').default,
  );
};
