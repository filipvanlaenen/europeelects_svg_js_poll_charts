        function getResults() {
          var results = {};
          //
          // *******************************************************************
          //
          // Fill in the percentage, or set to a negative number if the party
          // was absent in the poll:
          //
          results["PSD"] = 27;
          results["PS"] = 42;
          results["CDS"] = 7;
          results["BE"] = 8;
          results["CDU"] = 7;
          results["PAN"] = 2;       
          //
          // *******************************************************************
          //
          return results;
        }
        function getLastResults() {
          var last_results = {};
          last_results["PSD"] = 36.86;
          last_results["PS"] = 32.32;
          last_results["BE"] = 10.19;
          last_results["CDU"] = 8.25;
          last_results["PAN"] = 1.39;
          last_results["CDS"] = 0;
          return last_results;
        }
        function getEpGroupMapping() {
          var ep_group_mapping = {};         
          ep_group_mapping["BE"] = "GUE/NGL";
          ep_group_mapping["CDS"] = "EPP";
          ep_group_mapping["CDU"] = "GUE/NGL";
          ep_group_mapping["PAN"] = "GUE/NGL";          
          ep_group_mapping["PS"] = "S&D";
          ep_group_mapping["PSD"] = "EPP";
          return ep_group_mapping;
        }
