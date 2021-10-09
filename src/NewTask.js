import React,{ useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({createTask}) => {
    const [description,setDescription] = useState(undefined);
    const handleSubmit = e => {
        e.preventDefault();
        createTask(description);
    }
    return(
      <div>
          <h2>New Task</h2>
          <form onSubmit={e => handleSubmit(e)}>
              <div className="form-group" onSubmit={e => handleSubmit(e)}>
                  <label htmlFor="description">Description</label>
                  <textarea className="form-control" id="description" onChange={e => setDescription(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
    );
}