const CompanyListApi = () => {
  const getCompanyList = async (): Promise<any> => {
    const companyList = new Array(10).fill(0).map((_, index) => ({
      id: index + 1,
      name: `MOCK Company ${index + 1}`,
      shortName: "MC",
      website: "https://example.com",
      address: "Hanoi, Vietnam",
      phone: "+84987654321",
    }));

    return {
      data: companyList,
    };
  };

  return {
    getCompanyList,
  };
};

export default CompanyListApi;
