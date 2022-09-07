import csurf from 'csurf'

export const csrf = (req, res) => new Promise((resolve, reject) => {
  csurf({ cookie: true })(req, res, result => {
    if (result instanceof Error) {
      return reject(result)
    } else {
      return resolve(result)
    }
  })
})