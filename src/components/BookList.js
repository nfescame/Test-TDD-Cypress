import { Typography } from "@material-ui/core";

export default function BookList(props) {
  console.log(props);
  return (
    <div data-test='book-list'>
      {props.books.map((book) => (
        <div className='book-item'>
          <Typography variant='h5' component='h5' data-test='heading'>
            {book.name}
          </Typography>
        </div>
      ))}
    </div>
  );
}
