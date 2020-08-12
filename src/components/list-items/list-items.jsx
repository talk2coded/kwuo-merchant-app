import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SvgIcon from '@material-ui/core/SvgIcon';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboards" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
      <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.6565 37H23.2787V25.4389H17.5705V37H5.60655V21.63C5.60655 21.4231 5.68839 21.2246 5.83407 21.0782C5.97975 20.9319 6.17733 20.8497 6.38335 20.8497C6.58937 20.8497 6.78695 20.9319 6.93263 21.0782C7.0783 21.2246 7.16015 21.4231 7.16015 21.63V35.4393H16.0169V23.8783H24.8323V35.4393H34.103V21.63C34.103 21.4231 34.1848 21.2246 34.3305 21.0782C34.4761 20.9319 34.6737 20.8497 34.8797 20.8497C35.0858 20.8497 35.2834 20.9319 35.429 21.0782C35.5747 21.2246 35.6565 21.4231 35.6565 21.63V37ZM40.7726 21.3582C40.9182 21.2118 41 21.0134 41 20.8065C41 20.5996 40.9182 20.4012 40.7726 20.2548L20.8369 0.228445C20.6912 0.082171 20.4937 0 20.2877 0C20.0818 0 19.8842 0.082171 19.7385 0.228445L0.216715 19.8423C0.0758117 19.9896 -0.00198172 20.1865 3.83809e-05 20.3907C0.00205848 20.595 0.083731 20.7903 0.227519 20.9348C0.371307 21.0792 0.565745 21.1613 0.769081 21.1633C0.972418 21.1653 1.16844 21.0872 1.31506 20.9456L20.2893 1.88505L39.6711 21.3582C39.8177 21.5039 40.0156 21.5856 40.2218 21.5856C40.4281 21.5856 40.626 21.5039 40.7726 21.3582ZM35.6565 4.4755H24.8482V6.03616H34.103V15.3298H35.6565V4.4755Z" fill="white"/>
      </svg>
      
      </SvgIcon>
    );
  }
export default HomeIcon;