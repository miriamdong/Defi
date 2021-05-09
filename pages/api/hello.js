// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  export default function handler(req, res) {
  const { pid } = req.query
  res.end(`project: ${pid}`)
}
}
