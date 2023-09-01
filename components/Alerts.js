import React from 'react'

export default function Alerts(props) {
  return (
    props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  {props.alert.msg}:{props.alert.type}
  <button type={props.type} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
