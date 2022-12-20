import { Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import "./view_client.css";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Avatar from "@mui/material/Avatar";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import SearchIcon from "@mui/icons-material/Search";
import TableHead from "@mui/material/TableHead";
import { companies } from "../../Services/Rest_API/companies";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
const action_option = [
  { value: "View Details", icon: <RemoveRedEyeIcon /> },
  { value: "Edit", icon: <CreateIcon /> },
  { value: "Block Access", icon: <BlockIcon /> },
  { value: "Delete", icon: <DeleteIcon /> },
];

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function View_Client() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  console.log(matches);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - companies.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: "0.9rem",
      fontFamily: "Nunito Sans",
      fontWeight: 400,
      fontStyle: "normal",
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      fontSize: "0.9rem",
      fontFamily: "Nunito Sans",
      fontWeight: 400,
      fontStyle: "normal",
    },
  }));

  return (
    <div className="vclient__container">
      <Typography
        sx={{
          color: "#030037",
          fontWeight: 800,
          fontStyle: "normal",
          fontSize: "1.5rem",
          fontFamily: "Nunito Sans",
        }}
      >
        View Clients
      </Typography>
      <Typography
        sx={{
          color: "#030037",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "1.1rem",
          fontFamily: "Nunito Sans",
        }}
      >
        Client Master / View Clients
      </Typography>
      <Paper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <TextField
            InputProps={{
              startAdornment: (
                <SearchIcon
                  position="start"
                  sx={{ color: "#B8BABC" }}
                ></SearchIcon>
              ),
            }}
            placeholder="Search Modules"
            name="search"
            type="text"
            variant="outlined"
            size="small"
          />
          <Box sx={{ display: " flex " }}>
            {" "}
            <TextField
              fullWidth
              placeholder="Search"
              name="search"
              select
              sx={{ mr: "0.5rem " }}
              defaultValue="column"
              variant="outlined"
              size="small"
            >
              <option key="column" value="column">
                columns
              </option>
              <option>one</option>
              <option>one</option>
            </TextField>
            {matches && (
              <Button
                variant="outlined"
                fullWidth
                startIcon={<FileDownloadIcon />}
              >
                Export
              </Button>
            )}
            {!matches && (
              <IconButton fullWidth>
                <FileDownloadIcon />
              </IconButton>
            )}
          </Box>
        </Box>
        <div className="table__container__vcl">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow sx={{ background: "#F8F9FD" }}>
                  <StyledTableCell>Company Name</StyledTableCell>
                  <StyledTableCell>Email Address</StyledTableCell>
                  <StyledTableCell>Phone No</StyledTableCell>
                  <StyledTableCell>Contact Person</StyledTableCell>
                  <StyledTableCell>Facilitator</StyledTableCell>
                  <StyledTableCell>Sites</StyledTableCell>
                  <StyledTableCell>Tenants</StyledTableCell>
                  <StyledTableCell>Tenant Groups</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? companies.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : companies
                ).map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Avatar
                          sx={{ width: 20, height: 20, marginRight: "10px" }}
                        >
                          {row.company_name[0]}
                        </Avatar>
                        {row.company_name}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell>{row.email}</StyledTableCell>
                    <StyledTableCell>{row.phone_no}</StyledTableCell>
                    <StyledTableCell>{row.contact_person}</StyledTableCell>
                    <StyledTableCell>{row.facilitator}</StyledTableCell>
                    <StyledTableCell>{row.Sites}</StyledTableCell>
                    <StyledTableCell>{row.tenants}</StyledTableCell>
                    <StyledTableCell>{row.tenant_groups}</StyledTableCell>
                    <TableCell>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            border: "1px solid black",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&:before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        {action_option.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "as"}
                            onClick={handleClose}
                            sx={{
                              fontSize: "0.9rem",
                              fontFamily: "Nunito Sans",
                            }}
                          >
                            <>
                              {option.icon}
                              {option.value}
                            </>
                          </MenuItem>
                        ))}
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
                    colSpan={9}
                    count={companies.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      </Paper>
    </div>
  );
}

export default View_Client;
