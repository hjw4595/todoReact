import React from "react";
import { Link } from "react-router-dom";
import { Query,Mutation } from "react-apollo";
import styled from "styled-components";
import { GET_NOTES } from "../../queries";
import gql from "graphql-tag";

const Header = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  margin-left: 10px;
  transform: scale(0.8);
  background-color: #eee;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
`;

const Subtitle = styled.h2`
  color: #a2a19e;
  font-weight: 400;
`;

const Note = styled.div`
  padding: 10px;
  padding-left: 5px;
  transition: background-color 0.1s linear;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: #eeeeee;
  }
`;
const Notes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const NoteTitle = styled.span`
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 20px;
`;
const NoteteContent = styled.span`
  padding-left: 10px;
`
export const DELETE_NOTE = gql`
  mutation deleteNote($id: Int!) @client {
    deleteNote(id: $id) {
      id
    }
  }
`;
export default class Add extends React.Component {
  render() {
    return (
        <>
          <Header>
            <Title>
              ToDo Notes
              <Link to={"/add"}>
                <Button>ADD</Button>
              </Link>
            </Title>
            <Subtitle>Todo List</Subtitle>
          </Header>
          <Notes>
          <Query query={GET_NOTES}>
            {({ data }) =>
              data?.notes
                ? data.notes.map((note) => (
                  <>
                    <Link to={`/note/${note.id}`} key={note.id}>
                      <Note>
                        <NoteTitle>{note.title}</NoteTitle>
                        <NoteteContent>{note.content}</NoteteContent>
                      </Note>
                    </Link>
                    <Mutation mutation={DELETE_NOTE} variables={{id : note.id}}>
                      {deleteItem => <Button onClick={() => window.confirm("Are you sure?") && deleteItem()}>delet</Button>}
                    </Mutation>
                    </>
                  ))
                : null
            }
          </Query>
        </Notes>
        </>
      );
        }
}