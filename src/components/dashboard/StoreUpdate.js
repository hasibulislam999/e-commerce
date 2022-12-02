import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TinyLoading from "../../shared/loading/TinyLoading";
import useSellers from "../../utilities/useSellers";
import Button from "../Button";

const StoreUpdate = ({ store }) => {
  const [title, setTitle] = useState(store.title);
  const [description, setDescription] = useState(store.description);
  const [status, setStatus] = useState(store.status);
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { users, loading: usersLoading } = useSellers();

  function handleUpdateStore(event) {
    event.preventDefault();

    const storeInfo = {
      title: title,
      description: description,
      status: status,
      sellers: sellers,
    };

    const updateSpecificStore = async () => {
      setLoading(true);
      const request = await fetch(`https://e-commerce-ssr.onrender.com/store/${store?._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(storeInfo),
      });
      const response = await request.json();
      if (response.acknowledgement) {
        toast.success(response.description);
        setLoading(false);
      } else {
        toast.error(response.description);
        setLoading(false);
      }
    };
    updateSpecificStore();
  }

  useEffect(() => {
    const storeSellers = store?.sellers?.map((seller) => seller._id);
    setSellers(storeSellers);
  }, [store?.sellers]);

  return (
    <form className="flex flex-col gap-y-4 w-full" onSubmit={handleUpdateStore}>
      {/* store title */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Brand Title</span>
        </label>
        <input
          type="text"
          name="brand"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      {/* store description */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Brand Description</span>
        </label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered w-full"
        />
      </div>

      {/* store sellers */}
      {usersLoading ? (
        <TinyLoading />
      ) : (
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pick the store's sellers</span>
          </label>
          <select
            className="select select-bordered w-full"
            onChange={(e) =>
              setSellers((sellers) => [...sellers, e.target.value])
            }
          >
            {users?.map((seller) => (
              <option
                key={seller._id}
                value={seller._id}
                disabled={sellers.includes(seller._id)}
                className="capitalize"
              >
                {seller.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* set status */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Pick the product's brand</span>
        </label>
        <select
          className="select select-bordered w-full"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value={"active"} selected={status === "active"}>
            Active
          </option>
          <option value={"inactive"} selected={status === "inactive"}>
            Inactive
          </option>
        </select>
      </div>

      {loading ? <TinyLoading /> : <Button>Update store</Button>}
    </form>
  );
};

export default StoreUpdate;