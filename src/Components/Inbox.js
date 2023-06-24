import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InboxActions } from "./ReduxStore/InboxReducer";
import "./Inbox.css";
import SideBar from "./SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
const Inbox = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  console.log(search);
  const InboxData = useSelector((state) => state.inboxReducer.inboxData);
  const updateCounterOnDelete = useSelector(
    (state) => state.inboxReducer.unread
  );

  // Delete Email :-
  let url = "https://mail-box-client-72ab7-default-rtdb.firebaseio.com/";

  const email = localStorage.getItem("email").replace(/['@','.']/g, "");

  const deleteData = async (id) => {
    try {
      const response = await fetch(`${url}/Inbox/${email}/${id}.json`, {
        method: "DELETE",
      });
      console.log(response);
      dispatch(
        InboxActions.changeInbox(InboxData.filter((item) => item.id != id))
      );
      dispatch(InboxActions.updateUnread());
    } catch (error) {
      console.log(error);
    }
  };

  // Passing id -  to delete specific email :- To deleteData :-
  const deleteHandler = (id) => {
    deleteData(id);
  };

  // To delete when user click on delete , without refresh email get deleted ...fr that we use useEffect()
  useEffect(() => {
    dispatch(InboxActions.updateGet());
  }, [dispatch]);

  // Filter InboxData based on search input:
  const filteredInboxData = InboxData.filter((item) => {
    if (!search) {
      return true;
    } else {
      return item.from.toLowerCase().includes(search.toLowerCase());
    }
  });

  return (
    <div className="ParentBox">
      <div className="Sidebar">
        <SideBar />
      </div>
      <div className="tableParent">
        <input
          type="search"
          style={{ marginBottom: "2rem", border: "1px solid" }}
          placeholder="Search By Name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="InboxBoxName">INBOX</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">From</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredInboxData.map((item, index) => {
              return (
                <tr key={item.id}>
                  {/* index+1 caz it starting from zero so index + 1 = 1 */}
                  <td scope="row">{index + 1}</td>

                  {/* to show UNREAD MESSAGES  */}
                  <td>
                    {!item.read && <div className="dotDesign"></div>}
                    {item.from}
                  </td>
                  <td>{item.subject}</td>

                  {/* To View Specific Email  */}
                  <td>
                    <Link to={`/Inbox/${item.id}`}>View Message </Link>
                  </td>

                  {/* Passing id to delete sepcific Email  */}
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={deleteHandler.bind(null, item.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inbox;
