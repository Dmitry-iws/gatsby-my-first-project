/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require("fs")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const data = JSON.parse(fs.readFileSync("./content/index.json"))

    createPage({
      path: `/${data.main.address}`,
      component: require.resolve(`./src/templates/stroySale.js`),
      context: { data }
    })
}
