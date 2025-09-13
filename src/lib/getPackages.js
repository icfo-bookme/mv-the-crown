const getPackages = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ship/packages/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};

export default getPackages;