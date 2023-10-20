export default {
  name: 'Certifications',
  title: 'Certifications',
  type: 'document',
  fields: [
    {name: 'certificationName', title: 'Certification Name', type: 'string'},
    {
      name: 'issuingOrg',
      title: 'Issuing organization',
      type: 'string',
    },
    {
      name: 'credentialURL',
      title: 'Credential URL',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
