import React from "react";
// import axios from "axios";
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CategoryAvatar from "../molecules/CategoryAvatar.jsx";
import ListTxnText from "../atoms/ListTxnText.jsx";
import TxnDate from "../atoms/TxnDate.jsx";

export default function ListTxnsByDate ({txns}) {

  const txnList = txns.length === 0 ? <p>No Transactions Available</p> : txns.map((txn) => (
    <Box>
      <TxnDate dateValue={txn.txnDate} />
      <ListItem
        disableGutters
        secondaryAction={
          <ListTxnText ege="end" textValue={`$${txn.amount}`}/>
        }
        // key={`txn${txn.id}`}
      >
        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <ListItemAvatar>
            <CategoryAvatar categoryName={txn.categories[0].name}/>
          </ListItemAvatar>
          <ListTxnText textValue={txn.title}/>
        </Box>
      </ListItem>
    </Box>
    
  ));

  return (
      <List dense>
          {txnList}
      </List>
  );
};