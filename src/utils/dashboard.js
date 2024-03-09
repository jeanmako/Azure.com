const dashboardMenu = () => {

    const sidebarToggle = () => {
        document.body.classList.toggle('sidebar-open');
    };

// Sidebar Trigger 

    const sidebarTrigger = document.querySelector('.dashboard-menu');

    sidebarTrigger?.addEventListener('click',sidebarToggle)
    
};

export default dashboardMenu;
