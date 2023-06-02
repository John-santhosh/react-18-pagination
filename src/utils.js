const paginate = (followers) => {
  // console.log(followers);
  const req = 11;
  const pages = Math.ceil(followers.length / req);

  const data = Array.from({ length: pages }, (_, ind) => {
    // console.log(ind * req, ind * req + pagess);
    return followers.slice(ind * req, ind * req + pages);
  });
  // console.log(data);
  return data;
};

export default paginate;
