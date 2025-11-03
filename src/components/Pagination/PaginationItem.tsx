import React, {FC, useCallback, useState, useRef, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {AkeneoThemedProps, getColor} from '../../theme/theme';

const PAGINATION_SEPARATOR = '…';

type PaginationItemProps = {
  currentPage: boolean;
  page: string;
  followPage: (page: number) => void;
  numberOfPages: number;
};

const PaginationItem: FC<PaginationItemProps> = ({currentPage, page, followPage, numberOfPages}) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const closeInput = useCallback(() => {
    setShowInput(false);
    setInputValue('');
  }, []);

  const handleClick = useCallback(() => {
    if (page === PAGINATION_SEPARATOR) {
      setShowInput(true);
    } else {
      followPage(parseInt(page));
    }
  }, [page, followPage]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        const targetPage = parseInt(inputValue, 10);
        if (isNaN(targetPage)) {
          closeInput();
        } else if (targetPage < 1) {
          followPage(1);
          closeInput();
        } else if (targetPage > numberOfPages) {
          followPage(numberOfPages);
          closeInput();
        } else {
          followPage(targetPage);
          closeInput();
        }
      } else if (event.key === 'Escape') {
        closeInput();
      }
    },
    [inputValue, numberOfPages, followPage, closeInput]
  );

  const handleBlur = useCallback(() => {
    closeInput();
  }, [closeInput]);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  if (page === PAGINATION_SEPARATOR && showInput) {
    return (
      <JumpToPageInput
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={PAGINATION_SEPARATOR}
      />
    );
  }

  return (
    <PaginationItemContainer
      onClick={handleClick}
      data-testid="paginationItem"
      title={page !== PAGINATION_SEPARATOR ? `No. ${page}` : ''}
      currentPage={currentPage}
      disabled={false}
      type="button"
    >
      {page}
    </PaginationItemContainer>
  );
};

const currentPaginationItemMixin = css`
  border: 1px ${getColor('brand', 100)} solid;
  color: ${getColor('brand', 100)};
`;

const otherPaginationItemMixin = css`
  border: 1px ${getColor('grey', 80)} solid;
  color: ${getColor('grey', 100)};
`;

const disabledMixin = css`
  cursor: default;
  :hover {
    background-color: ${getColor('white')};
  }
`;

const PaginationItemContainer = styled.button<AkeneoThemedProps & {disabled: boolean; currentPage: boolean}>`
  ${({currentPage}) => (currentPage ? currentPaginationItemMixin : otherPaginationItemMixin)}
  display: inline-block;
  border-width: 1px;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 16px;
  padding: 0 10px;
  height: 22px;
  line-height: 21px;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 0.1s ease 0s;
  min-width: 40px;
  text-align: center;
  box-sizing: border-box;
  background-color: ${getColor('white')};

  :hover {
    background-color: ${getColor('grey', 20)};
  }

  :focus {
    outline: 0;
  }

  ${({disabled}) => (disabled ? disabledMixin : null)}
`;

const JumpToPageInput = styled.input<AkeneoThemedProps>`
  border: none;
  background: transparent;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 0 10px;
  height: 22px;
  line-height: 21px;
  font-family: inherit;
  min-width: 40px;
  width: 40px;
  text-align: center;
  box-sizing: border-box;
  color: ${getColor('grey', 100)};

  ::placeholder {
    color: ${getColor('grey', 100)};
  }

  :focus {
    outline: none;
  }
`;

export {PaginationItem, PAGINATION_SEPARATOR};
