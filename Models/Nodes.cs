using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapp.Models
{
    public class Nodes
    {
        private NodesContext context;
        public int Id { get; set; }
        public int Parent_id { get; set; }
        public string Label { get; set; }
    }
}
