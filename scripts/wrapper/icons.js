function plugin(ViraDesignSystem) {
    if (plugin.installed) {
        return;
    }

    ViraDesignSystem.icon.add(ICONS);
}

if (typeof window !== 'undefined' && window.ViraDesignSystem) {
    window.ViraDesignSystem.use(plugin);
}

export default plugin;
