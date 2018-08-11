exports.index = (req, res) => {
  const list = [
    {id: 1, title: "Blog 1", desc: "Description", created_at: "10 Aug 2018"},
    {id: 2, title: "Blog 2", desc: "Description", created_at: "10 Aug 2018"},
  ];

  res.json({
    results: list,
    total_pages: 10,
    current_pages: 1,
    next_pages: 2,
    total_data: 100,
    per_pages: 10
  });
}
