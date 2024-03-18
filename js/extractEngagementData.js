function extractQuotedValues(inputString) {
    const regex = /(['"])(.*?)\1/g;
    let matches = [];
    let match;
    while ((match = regex.exec(inputString)) !== null) {
        matches.push(match[2]);
    }
    return matches;
}

// Example usage:
const inputString = `[
  { name: 'Cloud Update Feb 6 Everyone but Eaton', state: 'scheduled' },
  { name: 'Cloud Maintenance Jan27 Everyone Else', state: 'completed' },
  { name: 'Cloud Maintenance Jan25 US', state: 'completed' },
  { name: 'Cloud Maintenance Jan24 EMEA', state: 'completed' },
  { name: "What's new aPD Jan_24", state: 'scheduled' },
  { name: 'Cloud Maintenance Jan24 US', state: 'completed' },
  { name: 'Cloud Maintenance Jan24', state: 'completed' },
  { name: '21.1 Welcome Banner', state: 'paused' },
  { name: 'Welcome Banner', state: 'scheduled' },
  { name: '22.1 Sheet Metal: Holes Tolerance', state: 'scheduled' },
  {
    name: '21.1 Sheet Metal: Hole - Bend Proximity',
    state: 'scheduled'
  },
  { name: '21.1 Sheet Metal: Hole Non-Orthogonal', state: 'scheduled' },
  { name: '21.1 Sheet Metal: Hole - Min Diameter', state: 'scheduled' },
  { name: '21.1 Plastic Molding: Draft Angle', state: 'scheduled' },
  { name: '21.1 Stock Machining: Sharp Corner', state: 'scheduled' },
  {
    name: '21.1 Plastic Molding: Minimum External Edge Radius',
    state: 'scheduled'
  },
  {
    name: '23.1 Machining: No Perpendicular Access',
    state: 'scheduled'
  },
  { name: '23.1 Machining: Is Threaded', state: 'scheduled' },
  { name: '23.1 Machining: No Parallel Access', state: 'scheduled' },
  {
    name: '23.1 Machining: High Milling L/D Ratio',
    state: 'scheduled'
  },
  { name: '23.1 Machining: Long Tool Reach', state: 'scheduled' },
  {
    name: '22.1.1.0  Roll Forming: Hole_To_Cutout_Proximity',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Hole_To_Hole_Proximity',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Inaccessible_Bends',
    state: 'scheduled'
  },
  { name: '21.1 Investment Casting: Minimum Radius', state: 'paused' },
  { name: '21.1 Sheet Metal: Bend - Min Radius', state: 'scheduled' },
  {
    name: '21.1 Die Casting: Minimum Hole Diameter',
    state: 'scheduled'
  },
  { name: '21.1 Sand Casting: Hole Proximity', state: 'scheduled' },
  {
    name: '21.1 Plastic Molding: Minimum Internal Edge Radius',
    state: 'scheduled'
  },
  {
    name: '21.1 Sand Casting: Maximum Wall Thickness',
    state: 'scheduled'
  },
  {
    name: '21.1 Die Casting: Maximum Wall Thickness',
    state: 'scheduled'
  },
  {
    name: '21.1 Sheet Metal: Bend - Min Flap Size',
    state: 'scheduled'
  },
  {
    name: '21.1 Die Casting: Minimum External Edge Radius',
    state: 'scheduled'
  },
  {
    name: '21.1 Die Casting: Minimum Edge Radius on Parting Line',
    state: 'scheduled'
  },
  {
    name: '21.1 Die Casting: Minimum Internal Edge Radius',
    state: 'scheduled'
  },
  { name: '21.1 Die Casting: Draft Angle', state: 'scheduled' },
  { name: '21.1 Sand Casting: Draft Angle', state: 'scheduled' },
  {
    name: '21.1 Sheet Metal: Hole - Edge Proximity',
    state: 'scheduled'
  },
  {
    name: '21.1 Sand Casting: Minimum Internal Edge Radius',
    state: 'scheduled'
  },
  {
    name: '21.1 Stock Machining: Obstructed Volume',
    state: 'scheduled'
  },
  { name: '21.1 Sheet Metal: Hem - Min Flap Size', state: 'scheduled' },
  {
    name: '21.1 Sheet Metal: Bend - Min Radius_Stamping',
    state: 'scheduled'
  },
  {
    name: '21.1 Sand Casting: Special Tooling Not Undercut',
    state: 'scheduled'
  },
  {
    name: '21.1 Stock Machining: Zero Tool Neck Diameter',
    state: 'scheduled'
  },
  {
    name: '21.1 Plastic Molding: Hole Depth to Hole Diameter Ratio',
    state: 'scheduled'
  },
  {
    name: '21.1 Plastic Molding: Minimum Edge Radius on Parting Line',
    state: 'scheduled'
  },
  {
    name: '21.1 Stock Machining: Obstructed Surfaces',
    state: 'scheduled'
  },
  { name: '21.1 Plastic Molding: Blind Hole', state: 'scheduled' },
  { name: '21.1 Sheet Metal: Bend - Die Lock', state: 'scheduled' },
  {
    name: '21.1 Plastic Molding: Maximum Wall Thickness',
    state: 'scheduled'
  }
 { name: '21.1 Sand Casting: Maximum Hole Depth', state: 'scheduled' },
  { name: '21.1 Sheet Metal: Hem - Extra process', state: 'scheduled' },
  { name: '21.1 Die Casting: Maximum Hole Depth', state: 'scheduled' },
  {
    name: '21.1 Sheet Metal: Hole - Hole Proximity',
    state: 'scheduled'
  },
  { name: '21.1 Stock Machining: Slot Shape', state: 'scheduled' },
  {
    name: '21.1 Sand Casting: Minimum Edge Radius on Parting Line',
    state: 'scheduled'
  },
  {
    name: '21.1 Sand Casting: Minimum Wall Thickness',
    state: 'scheduled'
  },
  {
    name: '21.1 Plastic Molding: Minimum Wall Thickness',
    state: 'scheduled'
  },
  { name: '21.1 Die Casting: Blind Hole', state: 'scheduled' },
  { name: '21.1 Sand Casting: Blind Hole', state: 'scheduled' },
  { name: '21.1 Sheet Metal: Hem - Closed', state: 'scheduled' },
  { name: '21.1 Sheet Metal: Bend Return flange', state: 'scheduled' },
  {
    name: '21.1 Sheet Metal: Bend - Tolerance Stack-Up',
    state: 'scheduled'
  },
  {
    name: '21.1 Sheet Metal: Hem - Teardrop Min Opening',
    state: 'scheduled'
  },
  {
    name: '21.1 Stock Machining: Side Milling L/D',
    state: 'scheduled'
  },
  { name: '21.1 Sheet Metal: Bend - Min. Length', state: 'scheduled' },
  { name: '21.1 Sheet Metal: Bend Angle', state: 'scheduled' },
  {
    name: '21.1 Die Casting: Minimum Wall Thickness',
    state: 'scheduled'
  },
  {
    name: '21.1 Sheet Metal: Hole - Form Proximity',
    state: 'scheduled'
  },
  { name: '21.1 Plastic Molding: Hole Proximity', state: 'scheduled' },
  {
    name: '21.1 Sand Casting: Minimum External Edge Radius',
    state: 'scheduled'
  },
  {
    name: '21.1 Sheet Metal: Intersecting Bend Die Station',
    state: 'scheduled'
  },
  { name: '21.1 Sheet Metal: Hem - Max. Diameter', state: 'scheduled' },
  {
    name: '21.1 Sand Casting: Special Tooling Accessible',
    state: 'scheduled'
  },
  {
    name: '21.1 Sheet Metal: Blank Flattening Problem',
    state: 'scheduled'
  },
  {
    name: '21.1 Sand Casting: Minimum Hole Diameter',
    state: 'scheduled'
  },
  {
    name: '21.1 Sheet Metal: Hem - Min Diameter / Radius',
    state: 'scheduled'
  },
  { name: '21.1 Die Casting: Hole Proximity', state: 'scheduled' },
  {
    name: '21.1 Sheet Metal: Hem - Rolled Min Opening',
    state: 'scheduled'
  },
  {
    name: '21.1 Sheet Metal: Bend - Form Proximity',
    state: 'scheduled'
  },
  { name: '22.1 Plastic Molding: Hole_Proximity', state: 'scheduled' },
  {
    name: '21.1 Sheet Metal: Bends Limit Unique Radii',
    state: 'scheduled'
  },
  { name: '2023 NPS Engagement', state: 'paused' },
  { name: "What's new in aP Workspace_Dec23", state: 'scheduled' },
  { name: "What's new in Dec 23", state: 'scheduled' },
  { name: "What's new slider template", state: 'editing' },
  { name: "What's new dialog template ", state: 'editing' },
  { name: "What's new in WS Jan 24 ", state: 'editing' },
  { name: "What's new in Nov2023", state: 'scheduled' },
  { name: 'Cloud Maintenance Nov 23', state: 'completed' },
  { name: '23 Cloud Home: Conference Advert 2', state: 'completed' },
  { name: "What's new in Oct2023", state: 'scheduled' },
  { name: "What's new in Sept2023", state: 'scheduled' },
  { name: 'WS: VIDEO aP Workspace Overview', state: 'scheduled' },
  {
    name: '23.1.2 Machining: Tolerance Requires Fine Finish Milling',
    state: 'scheduled'
  },
  { name: 'Reporting & Analysis Survey', state: 'paused' },
  { name: "5.0.16.0 What's new in June 2023", state: 'paused' },
  {
    name: "5.0.14.0 What's new banner quick comparison",
    state: 'paused'
  },
  { name: "5.0.14.0 What's new - quick compare", state: 'paused' },
  { name: "5.0.14.0 What's new - video summary", state: 'editing' }
{ name: "5.0.4.0 What's new single slide", state: 'paused' },
  { name: "5.0.4.0 What's new - reports", state: 'paused' },
  { name: "5.0.4.0 What's new multiple slides", state: 'editing' },
  { name: 'Cloud Home: March Webinar Advert', state: 'completed' },
  { name: 'WS: VIDEO Sharing Projects', state: 'scheduled' },
  {
    name: 'WS: VIDEO Part & Assembly Details Page UI Tour',
    state: 'scheduled'
  },
  { name: 'WS: VIDEO Configure a Card', state: 'scheduled' },
  {
    name: 'WS: VIDEO Understand Messages & Comments',
    state: 'scheduled'
  },
  { name: 'WS: VIDEO Messages Page UI Tour', state: 'scheduled' },
  {
    name: 'WS: VIDEO Part & Assembly Page UI Tour',
    state: 'scheduled'
  },
  { name: '22.1 Plastic Molding: Cure_Time', state: 'scheduled' },
  {
    name: '22.1 Plastic Molding: Manually_Inserted_Components',
    state: 'scheduled'
  },
  {
    name: '22.1 Plastic Molding: Capped_Internal_Cutouts',
    state: 'scheduled'
  },
  {
    name: '22.1 Bar&Tube: 3RollBend_Min_Bend_Radius',
    state: 'scheduled'
  },
  {
    name: '21.1 Investment Casting: Maximum Wall Thickness',
    state: 'scheduled'
  },
  { name: '21.1 Sheet Metal: Blind Hole', state: 'scheduled' },
  {
    name: '22.1 Plastic Molding: Die_Lock_Condition',
    state: 'scheduled'
  },
  {
    name: '21.1 Investment Casting: Draw Direction Accessible',
    state: 'scheduled'
  },
  {
    name: '22.1 Plastic Molding: Inaccessible_Void',
    state: 'scheduled'
  },
  { name: '22.1 Plastic Molding: Blind_Hole', state: 'scheduled' },
  {
    name: '21.1 Investment Casting: Threaded Feature',
    state: 'scheduled'
  },
  {
    name: '21.1 Investment Casting: Slide Accessibility',
    state: 'scheduled'
  },
  {
    name: '22.1 Plastic Molding: Simple_Hole_Is_Machined',
    state: 'scheduled'
  },
  {
    name: '21.1 Investment Casting: Minimum Wall Thickness',
    state: 'scheduled'
  },
  { name: '22.1 Bar&Tube: Limit_Num_Unique_Bends', state: 'scheduled' },
  {
    name: '21.1 Sheet Metal: Countersunk Hole Extra Op',
    state: 'scheduled'
  },
  {
    name: '21.1 Investment Casting: Minimum Opening Width',
    state: 'scheduled'
  },
  {
    name: '22.1 Machining: Hole_Depth_Hole_Diameter_Ratio',
    state: 'scheduled'
  },
  {
    name: '21.1 Sheet Metal: Flanged Hole Extra Op',
    state: 'scheduled'
  },
  { name: '21.1 Sheet Metal: Flanged Hole', state: 'paused' },
  {
    name: '21.1 Investment Casting: Slide Blocked Volume',
    state: 'scheduled'
  },
  {
    name: '22.1 Bar&Tube: RotaryDrawBending_Min_Bend_Radius',
    state: 'scheduled'
  },
  { name: '21.1 Investment Casting: Tolerance', state: 'scheduled' },
  {
    name: '21.1 Investment Casting: Minimum Hole Wall Thickness',
    state: 'scheduled'
  },
  {
    name: '21.1 Stock Machining: Minimum Floor Radius',
    state: 'scheduled'
  },
  { name: '22.1 Plastic Molding: Mold_Plating', state: 'scheduled' },
  {
    name: '22.1 Plastic Molding: Hole_Depth_Hole_Diameter_Ratio',
    state: 'scheduled'
  },
  {
    name: '22.1 Plastic Molding: No_Cost_Undercut',
    state: 'scheduled'
  },
  {
    name: '22.1 Bar&Tube: Comp_Bending_Min_Radius',
    state: 'scheduled'
  },
  { name: '21.1Investment Casting: Draft Angle', state: 'scheduled' },
  { name: '21.1 Sheet Metal: Hole Non-Planar', state: 'scheduled' },
  { name: '21.1 Sheet Metal: Countersunk Hole', state: 'scheduled' },
  {
    name: '22.1 Plastic Molding: Positive_Mold_Closure',
    state: 'scheduled'
  },
  {
    name: '22.1 Bar&Tube: Max_Expansion_Elongation',
    state: 'scheduled'
  },
  {
    name: '22.1 Investment Casting: Minimum Radius',
    state: 'scheduled'
  },
  {
    name: '22.1 Plastic Molding: Feature_Requires_Machining',
    state: 'scheduled'
  },
  { name: '22.1 Bar&Tube: Min_Dist_Between_Bends', state: 'scheduled' },
  {
    name: '21.1 Sheet Metal: Hem - Multiple Directions',
    state: 'scheduled'
  },
  { name: '22.1 Bar&Tube: Tube_Difficulty_Factor', state: 'scheduled' },
  {
    name: '22.1 Plastic Molding: High_Required_Press_Force',
    state: 'scheduled'
  }
{ name: '22.1 Bar&Tube: Max_Bend_Elongation', state: 'scheduled' },
  { name: 'Stock Machining: Slot Shape', state: 'paused' },
  { name: 'Zero Tool Neck Diameter', state: 'paused' },
  {
    name: '22.1.1.0  Roll Forming: Hole_To_Edge_Proximity',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Straight_Bend_To_Cutout_Proximity',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Max_Bend_Outer_Flap_Length',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Section_Height',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Cross_Section_Open_Symmetry',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Number_Finishing_Passes',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Increased_Inline_Punching',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Excessive_Spaced_Straight_Bends',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Min_Bend_Outer_Flap_Length',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Hole_To_Straight_Bend_Proximity',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Minimal_Spaced_Straight_Bends',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Reduced_Stock_Thickness',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Hole_Intersects_Main_Surface_Bends',
    state: 'scheduled'
  },
  {
    name: '22.1.1.0  Roll Forming: Min_Bend_Radius',
    state: 'scheduled'
  },
  {
    name: '23.1 Machining: Restricted Tool Holder Access',
    state: 'scheduled'
  },
  {
    name: '23.1 Plastic Molding: Regrind Allowance',
    state: 'scheduled'
  },
  {
    name: '23.1 Plastic Molding: Non-Regrindable Material',
    state: 'scheduled'
  },
  {
    name: '23.1 Plastic Molding: Short Shot Flow Appraisal',
    state: 'scheduled'
  },
  { name: '23.1 Machining: Hole L/D Ratio', state: 'scheduled' },
  { name: '23.1 Machining: Incompatible Material', state: 'scheduled' },
  {
    name: '23.1 Machining: No Inside Diameter Access',
    state: 'scheduled'
  },
  {
    name: '23.1 Machining: No Outside Diameter Access',
    state: 'scheduled'
  },
  { name: '23.1 Machining: Surface is Obstructed', state: 'scheduled' },
  { name: '23.1 Machining: No Turning Axis', state: 'scheduled' },
  {
    name: '23.1 Machining: Has Perimeter Obstructions',
    state: 'scheduled'
  },
  { name: '21.1 Sheet Metal: Holes Distinct', state: 'scheduled' },
  { name: "5.0.4.0 What's new - publish", state: 'paused' },
  { name: '22.1 Plastic Molding: Cavity_Finish', state: 'scheduled' },
  { name: '22.1 Plastic Molding: Cavity_Texture', state: 'scheduled' },
  {
    name: '21.1 Sheet Metal: Blank - Sharp Corner',
    state: 'scheduled'
  },
  { name: "22R1 What's new multiple slides", state: 'paused' },
  {
    name: 'Test Workspace : Find a component part 2',
    state: 'scheduled'
  },
  { name: 'Test Workspace: Find a Component', state: 'scheduled' },
  { name: 'Purchase Volume Survey', state: 'editing' },
  { name: 'Test - Workspace - Edit Cards', state: 'scheduled' },
  { name: 'Test - Welcome Workspace Dialog', state: 'scheduled' },
  { name: m'Filter Guide', state: 'paused' },
  { name: 'CIS Dialog ', state: 'editing' },
  { name: 'Filter Feedback', state: 'paused' },
  { name: 'Integration Test Engagement', state: 'paused' },
  { name: '21.1 Machining: Hole L/D Ratio', state: 'editing' },
  { name: 'Welcome Guide aPW', state: 'paused' },
  { name: '22.1 Quick Reference Document', state: 'scheduled' },
  { name: '22.1 VIDEO: aPriori Concepts', state: 'scheduled' },
  { name: '22.1 VIDEO: Modify Explore View', state: 'scheduled' },
  {
    name: '22.1 PGVIDEO: Sheet Metal Stretch Forming',
    state: 'scheduled'
  },
  {
    name: '22.1 PGVIDEO: Sheet Metal - Hydroforming',
    state: 'scheduled'
  }
{
    name: '22.1 PGVIDEO: Sheet Metal - Hard Tooled Processes',
    state: 'scheduled'
  },
  { name: '22.1 PGVIDEO: Rotational Molding', state: 'scheduled' },
  { name: '22.1 PGVIDEO: Plastic Molding', state: 'scheduled' },
  { name: '22.1 PGVIDEO: PCB Cost Model Overview', state: 'scheduled' },
  { name: '22.1 PGVIDEO: Investment Casting', state: 'scheduled' },
  { name: '22.1 PGVIDEO: Heat Treatment', state: 'scheduled' },
  { name: '22.1 PGVIDEO: Bar and Tube', state: 'scheduled' },
  {
    name: '22.1 PGVIDEO: Assembly Plastic Molding',
    state: 'scheduled'
  },
  { name: '22.1 PGVIDEO: Assembly Molding', state: 'scheduled' },
  { name: '22.1 PGVIDEO: Assembly', state: 'scheduled' },
  { name: '22.1 PGVIDEO: Additive Manufacturing', state: 'scheduled' },
  { name: '22.1 VIDEO: Load and Cost a Part', state: 'scheduled' },
  { name: '22.1 VIDEO: Publish a Part', state: 'scheduled' },
  { name: '22.1 VIDEO: Create a Comparison', state: 'scheduled' },
  { name: '22.1 VIDEO: Set Preferences', state: 'scheduled' },
  { name: '22.1 VIDEO: Create a Scenario', state: 'scheduled' },
  { name: '22.1 VIDEO: Set Preferences_clone', state: 'paused' },
  { name: 'Stock Machining Slider', state: 'scheduled' },
  { name: 'Cost Insight Design Lab Guide', state: 'scheduled' },
  { name: 'What Process Groups Should I Compare', state: 'scheduled' },
  { name: 'How Does Collaboration Work', state: 'scheduled' },
  { name: 'Compare Scenarios ', state: 'scheduled' },
  {
    name: 'What Does Selecting a Process Group and VPE Mean',
    state: 'scheduled'
  },
  { name: m'How Do I Use DFMC Guidance', state: 'scheduled' },
  { name: '21.1 Customize Explore View', state: 'scheduled' },
  { name: 'Open a Component', state: 'scheduled' },
  { name: 'Download Training Parts?', state: 'scheduled' },
  { name: 'Costing in aPriori', state: 'scheduled' },
  { name: 'Design Guidance', state: 'scheduled' },
  { name: 'Sheet Metal (Soft Tooled) Slider', state: 'scheduled' },
  { name: 'Casting Slider', state: 'scheduled' },
  { name: 'Design Tips with Stock Machining', state: 'scheduled' },
  {
    name: 'How Do I Use aPriori in My Design Process',
    state: 'scheduled'
  },
  { name: 'Plastic Molding Slider', state: 'scheduled' },
  { name: 'Assign & Publish', state: 'scheduled' },
  { name: '21.1 Sample Training Parts', state: 'scheduled' },
  { name: 'Quick Reference', state: 'scheduled' },
  { name: 'Additive Manufacturing Slider', state: 'scheduled' },
  { name: 'How Can I Apply & Review Tolerances', state: 'scheduled' },
  {
    name: 'How Does Utilization Impact Machining Cost',
    state: 'scheduled'
  },
  { name: 'Creating Scenarios', state: 'scheduled' },
  { name: 'Search and Filter Scenarios', state: 'scheduled' },
  { name: '21.1 Sheet Metal: Bend - Max. Length', state: 'editing' },
  { name: '21.1 Sheet Metal: Bend - Max Radius', state: 'editing' },
  { name: '21.1 Sheet Metal: Blank - Coined', state: 'paused' },
  { name: '21.1 Sheet Metal: Intersecting Bend', state: 'editing' },
  {
    name: '21.1 Sheet Metal: Bend - Close Return flange ',
    state: 'editing'
  },
  { name: '21.1 Sheet Metal: Bend non linear', state: 'editing' },
  { name: '21.1 Sheet Metal: Bend with Gusset', state: 'editing' },
  { name: '21R1 Die cast hole Proximity', state: 'paused' }
{
    name: '21.1 Stock Machining: Contoured Surface (moved to investigation tab now)',
    state: 'editing'
  },
  {
    name: '21.1 Stock Machining: Contour Milled Corner (moved to investigation tab now)',
    state: 'editing'
  },
  { name: '21.1 Stock Machining Design Tips', state: 'editing' },
  { name: '21.1 Stock Machining - Tool Accessible', state: 'editing' },
  {
    name: '21.1 Sheet Metal: Wall Thickness to Depth Ratio',
    state: 'editing'
  },
  { name: '21.1 Sheet Metal: Tapered Hole ', state: 'editing' },
  {
    name: '21.1 Sheet Metal: Hole tool availability',
    state: 'editing'
  },
  { name: '21.1 Sheet Metal: Hole Min Tool Radius', state: 'editing' },
  {
    name: '21.1 Sheet Metal: Hole - Threaded Additional Op',
    state: 'editing'
  },
  { name: '21.1 Sheet Metal: Hole - Threaded', state: 'editing' },
  { name: '21.1 Sheet Metal: Hole - Sharp Corner', state: 'editing' },
  { name: '21.1 Sheet Metal: Flanged Hole Quality', state: 'editing' },
  { name: '21.1 Sheet Metal: Coined Hole', state: 'editing' },
  { name: '21.1 Sheet Metal: Coined Hole quality', state: 'editing' },
  { name: '21.1 Sheet Metal: Blank - Min Radius', state: 'editing' },
  { name: '21.1 Quick Reference', state: 'paused' },
  {
    name: '21.1 Machining: Small Internal Fillet Radius',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Sharp Internal Corner Radius',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Pilot Hole Missing for Rotary Broaching',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Pilot Hole Length for Rotary Broaching',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Pilot Diameter for Rotary Broaching',
    state: 'editing'
  },
  { name: '21.1 Machining: Obstructed Polygon', state: 'editing' },
  { name: '21.1 Machining: Obstructed Hole', state: 'editing' },
  {
    name: '21.1 Machining: Non Standard Drill Point Angle',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Non Standard Countersink',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Lead In Chamfer on Pilot Hole for Rotary Broaching',
    state: 'editing'
  },
  { name: '21.1 Machining: High Aspect Ratio', state: 'editing' },
  {
    name: '21.1 Machining: Groove Milling Throat Length to Diameter',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Groove Milling Hole to Throat Diameter',
    state: 'editing'
  },
  { name: '21.1 Machining: Groove Milled Hole', state: 'editing' },
  {
    name: '21.1 Machining: Dovetail - Small Drophole',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Dovetail - Slot Sizes Driving Extra Tools',
    state: 'editing'
  },
  { name: '21.1 Machining: Dovetail - No Drophole', state: 'editing' },
  {
    name: '21.1 Machining: Dovetail - Fragile Tool (Extra Passes)',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Dovetail - Asymmetrical Double Sided',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Back Counterboring Throat Length to Diameter',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Back Counterboring Hole to Throat Diameter',
    state: 'editing'
  },
  { name: '21.1 Machining: Back Counterbored Hole', state: 'editing' },
  {
    name: '21.1 Machining: Alternative Available Square Bar Stock',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Alternative Available Round Tube Stock',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Alternative Available Round Bar Stock',
    state: 'editing'
  },
  {
    name: '21.1 Machining: Alternative Available Rectangular Bar Stock',
    state: 'editing'
  },
  { name: '21.1 Cost Insight Design Lab Guide', state: 'editing' },
  { name: '21.1 Apply & Review Tolerances', state: 'editing' },
  {
    name: '21.1 Machining: Alternative Available Plate Stock',
    state: 'editing'
  },
  { name: '21.1 Cost a Part long', state: 'paused' },
  { name: 'lab_guide', state: 'editing' },
  {
    name: 'PROBLEM CHILD21.1 Sheet Metal: Sharp Corner_clone2',
    state: 'editing'
  },
  {
    name: 'PROBLEM CHILD21.1 Sheet Metal: Sharp Corner',
    state: 'editing'
  },
  { name: 'Guide Template', state: 'editing' }
{ name: '21.1 Use aPriori in My Design Process', state: 'editing' },
  { name: '21.1 Compare Different Process Groups', state: 'editing' },
  {
    name: '21.1 The Impact of Utilization on Machining Cost',
    state: 'editing'
  },
  { name: '21.1 Collaboration in aPriori', state: 'editing' }

]
`;
const values = extractQuotedValues(inputString);
console.log(values); // Output: ['sample', 'quoted']
