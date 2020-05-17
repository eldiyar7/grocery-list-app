import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  root: {
    padding: 0,
  },
  default: {
    border: 0,
    outline: 'none',
    borderRadius: '4px',
    boxSizing: 'border-box',
    padding: '6px 16px',
    minWidth: '64px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    boxShadow: [
      [0, 1, 5, 0, 'rgba(0, 0, 0, 0.2)'],
      [0, 2, 2, 0, 'rgba(0, 0, 0, 0.14)'],
      [0, 3, 1, -2, 'rgba(0, 0, 0, 0.12)'],
    ],
    transition: [
      {
        property: 'background-color',
        duration: '250ms',
        timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        delay: '0ms',
      },
      {
        property: 'box-shadow',
        duration: '250ms',
        timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        delay: '0ms',
      },
      {
        property: 'border',
        duration: '250ms',
        timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        delay: '0ms',
      },
    ],
  },
  primary: {
    color: '#fff',
    backgroundColor: '#1976d2',
    '&:hover': { backgroundColor: 'rgb(17, 82, 147)' },
  },
  secondary: {
    color: '#fff',
    backgroundColor: '#f50057',
    '&:hover': { backgroundColor: '#c51162' },
  },
  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {
    cursor: 'default',
    pointerEvents: 'none',
    boxShadow: 'none',
    color: 'rgba(0, 0, 0, 0.26)',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
  /* Styles applied to the root element if `variant="text"`. */
  text: {
    padding: '6px 8px',
  },
});

function Button(props) {
  const classes = useStyles(props);
  const { disabled = false } = props;

  return (
    <button
      className={clsx(
        classes.root,
        classes.default,
        classes[props.color],
        {
          [classes.disabled]: disabled,
        },
      )}
      {...props}>
      <span>{props.children}</span>
    </button>
  );
}

Button.prototype = {
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
};

export default Button;
