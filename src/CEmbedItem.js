import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules, tagPropType } from './Shared/helper.js'

//component - CoreUI / CEmbedItem

const CEmbedItem = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    className,
    'embed-responsive-item'
  ), cssModule)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CEmbedItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  type: PropTypes.oneOf(['iframe', 'embed', 'video', 'object', 'img'])
};

CEmbedItem.defaultProps = {
  tag: 'iframe'
}

export default CEmbedItem
