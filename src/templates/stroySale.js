import React from "react"

export default ({ pageContext: { data } }) => (
  <section>
    {data.main.address}
    {console.log(data)}
  </section>
)