import PropTypes from 'prop-types';

import { LoadMore } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <>
      <LoadMore type="button" onClick={onLoadMore}>
        Load more
      </LoadMore>
    </>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
