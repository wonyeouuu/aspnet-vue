function getPost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('post')
    }, 1000)
  })
}

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('daniel')
    }, 1000)
  })
}

async function asyncGet() {
  console.log('start')
  const post = await getPost()
  console.log(post)
  const user = await getUser()
  console.log(user)
}

export default asyncGet
