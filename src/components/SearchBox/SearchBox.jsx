import { Formik, Form } from 'formik';
import { Input } from 'components/reusableComponents/Input/Input';
import { Button } from 'components/reusableComponents/Button/Button';

export default function SearchBox({ onSearch, query }) {
  return (
    <Formik
      initialValues={{ query: query }}
      onSubmit={(values, _) => onSearch(values.query.trim())}
    >
      <Form>
        <Input
          name="query"
          autoComplete="off"
          type="text"
          placeholder="Search movies"
        />
        <Button type="submit">Search</Button>
      </Form>
    </Formik>
  );
}
