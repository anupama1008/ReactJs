import React from 'react'

export default function Alert(props) {
    const capitalize=(word) => {
        let origin=word
        return origin.charAt(0).toUpperCase()+origin.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
    </div>
  )
}
