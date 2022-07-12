import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useLittera } from "@assembless/react-littera"
import { Translation } from "../../utils/traduccion";
import { borderColor, width } from '@mui/system';

export default function ScrollableTabsButtonVisible() {
    const trans = useLittera(Translation.home)
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                maxWidth: { xs: 1500, sm: 840 },
                color: "#abaaaa",
                width: "100%",

            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                TabIndicatorProps={{ style: { background: '#ff3300' } }}
                aria-label="visible arrows tabs example"
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                    },

                    '& .MuiTab-root.Mui-selected': {
                        color: '#ff3300'
                    }

                }}
            >
                <Tab sx={{ color: "#abaaaa", width: "18%", marginRight: "3%" }} label="Chasis" />
                <Tab sx={{ color: "#abaaaa", width: "18%", marginRight: "3%" }} label={trans.motor} />
                <Tab sx={{ color: "#abaaaa", width: "18%", marginRight: "3%" }} label={trans.partes} />
                <Tab sx={{ color: "#abaaaa", width: "18%", marginRight: "3%" }} label={trans.sistemaE} />
                <Tab sx={{ color: "#abaaaa", width: "18%", marginRight: "3%" }} label={trans.herramientas} />
                <Tab sx={{ color: "#abaaaa", width: "18%", marginRight: "3%" }} label={trans.limpieza} />
                <Tab sx={{ color: "#abaaaa", width: "18%", marginRight: "3%" }} label={trans.accesorios} />
            </Tabs>
        </Box>
    );
}
