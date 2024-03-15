import React from 'react';
import {
  FormControl,
  InputGroup,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import { BsCheck2 } from 'react-icons/bs';

const DropDown = ({ sortBy, onSortByChange, orderBy, onOrderByChange }) => {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Sort">
      <Dropdown.Item
        href="#"
        onClick={() => onSortByChange('firstName')}>
        First Name{' '}
        {sortBy === 'firstName' && <BsCheck2 className="float-end" />}
      </Dropdown.Item>
      <Dropdown.Item
        href="#"
        onClick={() => onSortByChange('lastName')}>
        Last Name {sortBy === 'lastName' && <BsCheck2 className="float-end" />}
      </Dropdown.Item>
      <Dropdown.Item
        href="#"
        onClick={() => onSortByChange('aptDate')}>
        Date {sortBy === 'aptDate' && <BsCheck2 className="float-end" />}
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        href="#"
        onClick={() => onOrderByChange('asc')}>
        Ascending {orderBy === 'asc' && <BsCheck2 className="float-end" />}
      </Dropdown.Item>
      <Dropdown.Item
        href="#"
        onClick={() => onOrderByChange('desc')}>
        Descending {orderBy === 'desc' && <BsCheck2 className="float-end" />}
      </Dropdown.Item>
    </DropdownButton>
  );
};

const Search = ({
  query,
  onQueryChange,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) => {
  return (
    <InputGroup className="my-2">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={event => {
          onQueryChange(event.target.value);
        }}
        value={query}
      />
      <DropDown
        sortBy={sortBy}
        onSortByChange={mySort => onSortByChange(mySort)}
        orderBy={orderBy}
        onOrderByChange={myOrder => onOrderByChange(myOrder)}
      />
    </InputGroup>
  );
};

export default Search;
