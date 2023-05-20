export default (app) => {
  app.post(
    `/tenant/:tenantId/gallery`,
    require('./galleryCreate').default,
  );
  app.put(
    `/tenant/:tenantId/gallery/:id`,
    require('./galleryUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/gallery/import`,
    require('./galleryImport').default,
  );
  app.delete(
    `/tenant/:tenantId/gallery`,
    require('./galleryDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/gallery/autocomplete`,
    require('./galleryAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/gallery`,
    require('./galleryList').default,
  );
  app.get(
    `/tenant/:tenantId/gallery/:id`,
    require('./galleryFind').default,
  );
};
