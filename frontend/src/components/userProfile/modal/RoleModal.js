import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import StudentIcon from "src/assets/images/home/student_icon.svg";
import TeacherIcon from "src/assets/images/home/teacher_icon.svg";
import { Slide, Divider } from "@mui/material";
import apiClients from "src/apiClients/apiClients";
import { useLocation, useNavigate } from "react-router-dom";
import MainButton from "src/components/Button/MainButton/MainButton";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={500} />;
});

function RoleModal({ open, handleClose, user_email }) {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [roleError, setRoleError] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomId = queryParams.get("roomId");
  const checkoutId = queryParams.get("checkout");
  const sheduledId = queryParams.get("scheduleId");
  const Role = queryParams.get("role");
  const navigateLink = queryParams.get("to")
  const handleRoleClick = (role) => {
    setRoleError(false);
    setSelectedRole(role);
  };

  const isSelected = (role) =>
    selectedRole === role ? "ring-2 ring-blue-500" : "";

  // const handleCloseBox = () => {
  //   handleClose();
  // };

  const handleAddRole = async () => {
    try {
      if (selectedRole) {
        const data = {
          userEmail: user_email,
          role: selectedRole,
        };
        const response = await apiClients.addRole(data);
        if (response.data) {
          // localStorage.setItem("user", JSON.stringify(response.data));
          // // localStorage.setItem("access_token", JSON.stringify(response.token));
          // if (response?.data?.role?.name === "Administrator") {
          //   navigate("/organization/dashboard", { replace: true });
          // } else {
          //   navigate("/room", { replace: true });
          // }

          if(navigateLink){
            navigate(`${navigateLink}`);
          }else if (roomId && sheduledId) {
            navigate(`/Join-meeting?roomId=${roomId}&scheduleId=${sheduledId}`);
          } else if (roomId) {
            navigate(`/room/${roomId}/join`);
          } else if (checkoutId) {
            if (response?.data?.role?.name === "Guest") {
              navigate("/room", { replace: true });
            } else {
              navigate(`/checkout?id=${checkoutId}`);
            }
          } else if (
            response?.data?.role?.name === "Administrator" ||
            response?.data?.role?.name === "Super Admin"
          ) {
            navigate("/organization/dashboard", { replace: true });
          } else {
            navigate("/room", { replace: true });
          }
        }
      } else {
        setRoleError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog
        maxWidth={"sm"}
        fullWidth
        open={open}
        // onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle sx={{ textAlign: "center", backgroundColor: "#F5F7FB" }}>
          <h2 className="text-center text-2xl font-semibold mb-6">
            Pick Your Role
          </h2>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <div className=" flex items-center justify-center ">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
              <div className="flex flex-col justify-around md:flex-row gap-3 md:gap-0">
                {/* Student Card */}
                <div
                  className={`flex flex-col items-center bg-gray-50 rounded-lg shadow p-4 cursor-pointer hover:bg-gray-100 transition ${isSelected(
                    "Guest"
                  )}`}
                  onClick={() => handleRoleClick("Guest")}
                >
                  <div className="rounded-full bg-[#008080] p-4">
                    <img
                      src={StudentIcon}
                      alt="Student"
                      className="w-16 h-16"
                    />
                  </div>
                  <p className="mt-4 text-lg font-medium">I'm a student</p>
                </div>

                {/* Teacher Card */}
                <div
                  className={`flex flex-col items-center bg-gray-50 rounded-lg shadow p-4 cursor-pointer hover:bg-gray-100 transition ${isSelected(
                    "Moderator"
                  )}`}
                  onClick={() => handleRoleClick("Moderator")}
                >
                  <div className="rounded-full bg-[#4CAF50] p-4">
                    <img
                      src={TeacherIcon}
                      alt="Teacher"
                      className="w-16 h-16"
                    />
                  </div>
                  <p className="mt-4 text-lg font-medium">I'm a teacher</p>
                </div>
              </div>
              {roleError && (
                <div style={{ margin: "10px", textAlign: "center" }}>
                  <span style={{ color: "red" }}>Please Selecte Role</span>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          {/* <Button
            onClick={handleCloseBox}
            sx={{
              border: "1px solid #444444",
              padding: "10px 20px",
              color: "#444444",
              "&:hover": {
                backgroundColor: "#F5F7FB",
              },
            }}
          >
            Cancel
          </Button> */}
          <MainButton onClick={handleAddRole}>Done</MainButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RoleModal;
