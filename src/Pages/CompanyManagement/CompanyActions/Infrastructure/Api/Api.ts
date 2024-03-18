const CompanyActionsApi = () => {
  const getCompanyDetail = async (id: number): Promise<any> => {
    return {
      data: {
        id,
        name: `MOCK Company ${id}`,
        shortName: "MC",
        website: "https://example.com",
        address: "Hanoi, Vietnam",
        phone: "+84987654321",
      },
    };
  };

  return {
    getCompanyDetail,
  };
};

export default CompanyActionsApi;
