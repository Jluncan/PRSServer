import React from 'react'
import RequestLinesForm from './RequestLinesForm'

function RequestLinesCreatePage() {
  return (
    <>
    <nav className="d-flex justify-content-between">
      <h4>Create Request Lines</h4>
    </nav>
    <hr />
    <RequestLinesForm />
  </>
  )
}

export default RequestLinesCreatePage